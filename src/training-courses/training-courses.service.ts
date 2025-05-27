import { Injectable } from '@nestjs/common';
import { CreateTrainingCourseDto } from './dto/create-training-course.dto';
import { UpdateTrainingCourseDto } from './dto/update-training-course.dto';

@Injectable()
export class TrainingCoursesService {
  create(createTrainingCourseDto: CreateTrainingCourseDto) {
    return 'This action adds a new trainingCourse';
  }

  findAll() {
    return `This action returns all trainingCourses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainingCourse`;
  }

  update(id: number, updateTrainingCourseDto: UpdateTrainingCourseDto) {
    return `This action updates a #${id} trainingCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingCourse`;
  }
}
