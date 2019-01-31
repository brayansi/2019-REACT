import { ApiService } from './ApiService';

const endPonit = 'courses';

export const CourseService = {
    list() {
        return ApiService.get(endPonit);
    },
    create(course) {
        return ApiService.post(endPonit, course);
    },
    remove(id) {
        return ApiService.delete(endPonit, id);
    }
}