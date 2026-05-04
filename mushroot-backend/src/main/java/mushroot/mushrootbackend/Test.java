package mushroot.mushrootbackend;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import org.jspecify.annotations.Nullable;

import java.io.File;

@Entity
public class Test {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private @Nullable Integer id;

    private String teacher;
    private int year;
    private String courseCode;
    private String[] otherTags;
//    private MEDIUMBLOB pdfFile;

    public  Test() {
    }
    public Test(String teacher, int year, String courseCode, String[] otherTags) {
        this.teacher = teacher;
        this.year = year;
        this.courseCode = courseCode;
        this.otherTags = otherTags;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public void setOtherTags(String[] otherTags) {
        this.otherTags = otherTags;
    }

    public @Nullable Integer getId() {
        return id;
    }

    public String getTeacher() {
        return teacher;
    }

    public int getYear() {
        return year;
    }

    public String getCourseCode() {
        return courseCode;
    }

    public String[] getOtherTags() {
        return otherTags;
    }

}
