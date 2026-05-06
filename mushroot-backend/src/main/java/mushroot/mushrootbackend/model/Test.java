package mushroot.mushrootbackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data               // Lombok magic: auto-generates getters, setters, toString
@Entity             // Tells JPA: "this is a database table"
@Table(name = "tests")  // The table will be called "tests" in MySQL
public class Test {

    @Id                                          // This is the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment (1, 2, 3...)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)     // Can't be empty, must be unique
    private Course_Code courseCode;

    @Column(nullable = false)
    private int year;

    @Column(nullable = false)
    private String teacherName;

    // @Lab
    @Column(nullable = false, columnDefinition = "BLOB")
    private byte[] thumbnail;

    //@Lab
    @Column(nullable = false, columnDefinition = "MEDIUMBLOB")
    private byte[] data;

}