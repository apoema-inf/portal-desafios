package br.ufg.inf.apoema.portal.Repo;

import br.ufg.inf.apoema.portal.Models.User;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface UserRepository extends Repository<User, Integer> {

    void delete(User user);

    List<User> findAll();

    User findOne(int id);

    User save(User user);
}
