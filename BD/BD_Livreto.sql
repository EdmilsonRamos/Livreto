create database Livreto;
USE Livreto;

create table Autor(
ID int auto_increment primary key,
Nome varchar(50) not null,
Data_nascimento date,
Email varchar(100) not null,
Numero_tel int not null,
Senha varchar(100) not null,
Biografia varchar(1000) not null
);

create table Livros(
ID int auto_increment primary key,
Nome varchar(50) not null,
Titulo varchar(50) not null,
Editora varchar(50) not null,
Preço decimal not null,
Data_publicação date not null,
Descrição varchar(300) not null,
Livro varchar(2000) not null
);

create table AutorLivro(
ID int auto_increment primary key,
ID_autor int not null,
ID_livro int not null,
foreign key(ID_autor) references Autor(ID),
foreign key(ID_livro) references Livros(ID)
);

create table Leitor(
ID int auto_increment primary key,
ID_livro int not null,
Nome varchar(50) not null,
Data_nascimento date,
Email varchar(100) not null,
Numero_tel int not null,
Senha varchar(100) not null,
foreign key(ID_livro) references Livros(ID)
);

create table Administrador(
ID int auto_increment primary key,
Nome varchar(50) not null,
Data_nascimento date,
Email varchar(100) not null,
Numero_tel int not null,
Senha varchar(100) not null
);

create table Loja(
ID int auto_increment primary key,
Nome_loja varchar(50) not null
);

create table AdmLoja(
ID int auto_increment primary key,
ID_adm int not null,
ID_loja int not null,
foreign key(ID_adm) references Administrador(ID),
foreign key(ID_loja) references Loja(ID)
);

create table LojaLivro(
ID int auto_increment primary key,
ID_loja int not null,
ID_livro int not null,
foreign key(ID_loja) references Loja(ID),
foreign key(ID_livro) references Livros(ID)
);
