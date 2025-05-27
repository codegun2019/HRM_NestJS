import { Injectable } from '@nestjs/common';
import { CreateTrainingEnrollmentDto } from './dto/create-training-enrollment.dto';
import { UpdateTrainingEnrollmentDto } from './dto/update-training-enrollment.dto';

@Injectable()
export class TrainingEnrollmentsService {
  create(createTrainingEnrollmentDto: CreateTrainingEnrollmentDto) {
    return 'This action adds a new trainingEnrollment';
  }

  findAll() {
    return `This action returns all trainingEnrollments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainingEnrollment`;
  }

  update(id: number, updateTrainingEnrollmentDto: UpdateTrainingEnrollmentDto) {
    return `This action updates a #${id} trainingEnrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingEnrollment`;
  }
}
