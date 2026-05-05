package mushroot.mushrootbackend.service;

import mushroot.mushrootbackend.model.Course_Code;
import mushroot.mushrootbackend.model.Test;
import mushroot.mushrootbackend.repository.TestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service                    // Tells Spring: "this is the logic/chef layer"
@RequiredArgsConstructor    // Lombok: auto-creates the constructor for us
public class TestService {

    private final TestRepository testRepository;

    // Get every test in the DB
    public List<Test> getAllTests() {
        return testRepository.findAll();
    }

    // Get one test by its ID
    public Test getTestById(Long id) {
        return testRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Test not found with id: " + id));
    }

    // Get all tests for a course (e.g. ICS4U)
    public List<Test> getTestsByCourse(Course_Code course_code) {
        return testRepository.findByCourseCode(course_code);
    }

    // Get all tests by a teacher
    public List<Test> getTestsByTeacher(String teacher_name) {
        return testRepository.findByTeacherName(teacher_name);
    }

    // Upload / save a new test
    public Test createTest(Test test) {
        return testRepository.save(test);
    }

    // Delete a test
    public void deleteTest(Long id) {
        testRepository.deleteById(id);
    }

}