1:CREATE DATABASE:---

CREATE DATABASE `cods`;
 
2:CREATE TABLE:---
 
CREATE TABLE IF NOT EXISTS `contactForm` (
   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255),
   `phone` VARCHAR(255),
   `email` VARCHAR(255) NOT NULL,
   `message` TEXT
 ) ENGINE = InnoDB;
 
3:SELECT TABLE

SELECT * FROM `contactForm`;

4:SELECT SPACIC TABLE column---

SELECT id,name,phone,email,message FROM `contactForm`;

5: Check Condition---

SELECT * FROM `contactForm` WHERE `email` = `${email}`;


