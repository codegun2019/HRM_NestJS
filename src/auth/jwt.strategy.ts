import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { UnauthorizedException } from '@nestjs/common';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret', // 🔒 เปลี่ยนเป็น env ใน production
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.findOne(payload.sub);

    if (!user) {
      throw new UnauthorizedException('ไม่พบผู้ใช้งานในระบบ');
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role?.name,
      is_active: user.is_active,
      created_at: user.created_at,
    };
  }
  
}
