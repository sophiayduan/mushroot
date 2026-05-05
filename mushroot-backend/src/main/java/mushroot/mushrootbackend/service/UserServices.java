package mushrootbackend.service;

import mushrootbackend.model.User;
import mushrootbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service                    // Tells Spring: "this is the logic/chef layer"
@RequiredArgsConstructor    // Lombok: auto-creates the constructor for us
public class UserService {

    private final UserRepository userRepository;  // Injected automatically by Spring

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Find one user by ID
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    // Save a new user
    public User createUser(User user) {
        return userRepository.save(user);
    }

    public void registerUser(String username, String email) {
        userRepository.createUser(username, email);
    }

    // Delete a user
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}