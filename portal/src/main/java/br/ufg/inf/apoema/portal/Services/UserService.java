package br.ufg.inf.apoema.portal.Services;

import br.ufg.inf.apoema.portal.Models.User;

import java.util.List;

public interface UserService {

    User create(User user);

    User delete(int id);

    List<User> findAll();

    User findById(int id);

    User update(User user);
}