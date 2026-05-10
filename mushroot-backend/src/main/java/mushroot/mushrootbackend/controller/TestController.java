package mushroot.mushrootbackend.controller;

import mushroot.mushrootbackend.model.Course_Code;
import mushroot.mushrootbackend.model.Test;
import mushroot.mushrootbackend.service.TestService;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/tests")
@RequiredArgsConstructor
public class TestController {

    @Autowired
    private TestService testService;

    // GET /api/tests
    @GetMapping
    public List<Test> getAllTests() {
        return testService.getAllTests();
    }

    // GET /api/tests/1
    @GetMapping("/{id}")
    public ResponseEntity<Test> getTestById(@PathVariable Long id) {
        return ResponseEntity.ok(testService.getTestById(id));
    }

    // GET /api/tests/course/ICS4U
    @GetMapping("/course/{course_code}")
    public List<Test> getTestsByCourse(@PathVariable Course_Code course_code) {
        return testService.getTestsByCourse(course_code);
    }

    // GET /api/tests/teacher/MrAmini
    @GetMapping("/teacher/{teacher_name}")
    public List<Test> getTestsByTeacher(@PathVariable String teacher_name) {
        return testService.getTestsByTeacher(teacher_name);
    }

    // POST /api/tests
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Test> createTest(
            @RequestParam String title,
            @RequestParam Course_Code courseCode,
            @RequestParam int year,
            @RequestParam String teacherName,
            @RequestParam MultipartFile thumbnail,
            @RequestParam MultipartFile data,
            @RequestParam(required = false) List<String> tags
    ) throws IOException {
        Test test = new Test();
        test.setTitle(title);
        test.setCourseCode(courseCode);
        test.setYear(year);
        test.setTeacherName(teacherName);
        test.setThumbnail(thumbnail.getBytes());
        test.setData(data.getBytes());
        test.setTags(tags != null ? tags : List.of());
        return ResponseEntity.ok(testService.createTest(test));
    }

    // DELETE /api/tests/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTest(@PathVariable Long id) {
        testService.deleteTest(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/ping")
    public ResponseEntity<String> ping() {
        return ResponseEntity.ok("pong");
    }
}