# SD_intern_assisement
## Requirement
to complete this assignssment i am going to use
frontend: react
backend: node express
database: postgres sql


##setup
1. lets start with database 
create database 
`CREATE TABLE Registration (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    DoB DATE,
    PhoneNo VARCHAR(15),
    Address TEXT,
    RegistrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`

populate with some data
INSERT INTO Registration (Name, Email, DoB, PhoneNo, Address)
VALUES ('Sujit Bhoir', 'sujit@gmail.com', '2004-06-18', '9356000000', 'mumbai maharastra');

INSERT INTO Registration (Name, Email, DoB, PhoneNo, Address)
VALUES ('Pratham Logde', 'pratham@gmail.com', '2002-01-01', '8698000000', 'alibag maharastra');


##backend


##frontend