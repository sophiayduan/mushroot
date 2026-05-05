package com.yourapp.repository;

import com.yourapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// JpaRepository gives you free methods: save(), findById(), findAll(), delete()...
public interface UserRepository extends JpaRepository<User, Long> {

    // Spring reads this method NAME and writes the SQL for you automatically!
    // It becomes: SELECT * FROM users WHERE email = ?
    // 1. Find by ID (Already exists in JpaRepository, but for clarity:)
    Optional<User> findById(Long id);

    // 2. Find by Course Code (using the Enum)
    Optional<User> findByCourseCode(Course_Code courseCode);

    // 3. Find by Year
    List<User> findByYear(int year);

    // 4. Find by Teacher Name
    List<User> findByTeacherName(String teacherName);
    
    // Bonus: Find by multiple criteria (e.g., Year and Teacher)
    List<User> findByYearAndTeacherName(int year, String teacherName);

    List<User> findByCourseCodeAndTeacherName(Course_Code courseCode, String teacherName);
}