INSERT INTO users(id, login, pass)
    Values(1, 'login1', 'pass1');

INSERT INTO users(id, login, pass)
    Values(2, 'login2', 'pass2');

INSERT INTO products(id, name, img_src, price, category_id)
    Values(1, 'Гра1', './frontend/img/horror/2.webp', '30 UAH', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(2, 'Гра2', './frontend/img/horror/1.webp', '20 UAH', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(3, 'Гра3', './frontend/img/horror/3.webp', '25 UAH', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(4, 'Гра4', './frontend/img/horror/4.webp', '42 UAH', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(5, 'Гра5', './frontend/img/horror/5.webp', '33 UAH', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(6, 'Гра6', './frontend/img/indie/1.webp', '8 UAH', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(7, 'Гра7', './frontend/img/indie/2.webp', '10 UAH', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(8, 'Гра8', './frontend/img/indie/3.webp', '15 UAH', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(9, 'Гра9', './frontend/img/indie/5.webp', '18 UAH', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(10, 'Гра10', './frontend/img/indie/4.webp', '13 UAH', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(11, 'Гра11', './frontend/img/shooter/3.webp', '90 UAH', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(12, 'Гра12', './frontend/img/shooter/5.webp', '55 UAH', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(13, 'Гра13', './frontend/img/shooter/2.webp', '3 UAH', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(14, 'Гра14', './frontend/img/shooter/1.webp', '120 UAH', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(15, 'Гра15', './frontend/img/shooter/4.webp', '80 UAH', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(16, 'Гра16', './frontend/img/strategy/3.webp', '70 UAH', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(17, 'Гра17', './frontend/img/strategy/1.webp', '90 UAH', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(18, 'Гра18', './frontend/img/strategy/5.webp', '85 UAH', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(19, 'Гра19', './frontend/img/strategy/4.webp', '75 UAH', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(20, 'Гра20', './frontend/img/strategy/2.webp', '100 UAH', 4);

INSERT INTO category(id, name)
    Values(1, 'horrors');

INSERT INTO category(id, name)
    Values(2, 'indie');

INSERT INTO category(id, name)
    Values(3, 'shooter');

INSERT INTO category(id, name)
    Values(4, 'strategy');

INSERT INTO wishlist(id, user_id, product_id)
    Values(1, '1', '2');

INSERT INTO wishlist(id, user_id, product_id)
    Values(2, '1', '3');

INSERT INTO wishlist(id, user_id, product_id)
    Values(3, '1', '4');

INSERT INTO wishlist(id, user_id, product_id)
    Values(4, '2', '5');

INSERT INTO wishlist(id, user_id, product_id)
    Values(5, '2', '6');
