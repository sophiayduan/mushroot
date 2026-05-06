package mushroot.mushrootbackend.repository;

import mushroot.mushrootbackend.model.Course_Code;
import mushroot.mushrootbackend.model.Test;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

// JpaRepository gives you free methods: save(), findById(), findAll(), delete()...
public interface TestRepository extends JpaRepository<Test, Long> {

    // Spring reads this method NAME and writes the SQL for you automatically!
    // It becomes: SELECT * FROM users WHERE email = ?
    // 1. Find by ID (Already exists in JpaRepository, but for clarity:)
    Optional<Test> findById(Long id);

    // 2. Find by Course Code (using the Enum)
    List<Test> findByCourseCode(Course_Code courseCode);

    // 3. Find by Year
    List<Test> findByYear(int year);

    // 4. Find by Teacher Name
    List<Test> findByTeacherName(String teacherName);

    // Bonus: Find by multiple criteria (e.g., Year and Teacher)
    List<Test> findByYearAndTeacherName(int year, String teacherName);

    List<Test> findByCourseCodeAndTeacherName(Course_Code courseCode, String teacherName);
}