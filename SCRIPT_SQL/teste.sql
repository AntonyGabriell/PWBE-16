#Permite vizualizar todos os databases existentes no Banco de Dados
show databases;


#Permite apagar um database e toda a sua estrutura de tabela e dados
drop database dbcontatos20222;


#Permite criar um novo database no BD
create database db_lionschool;


#Permite ativar a utilizacao de um database
use db_lionschool;


#Permite vizualizar todas as tabelas existentes dentro de um database
show tables;


#Criar tabela
create table tbl_aluno(
	id int UNSIGNED not null auto_increment primary key,
	nome varchar(80) not null,
    foto varchar(100)  not null,
    sexo varchar(1),
    rg varchar(15) not null,
    cpf varchar(15) not null,
    email varchar(256) not null,
    telefone varchar(18),
    celular varchar(18),
    data_nascimento date not null,
    unique index(id)
);

#Permite apagar uma tabela
drop table tbl_aluno;


create table tbl_curso(
	id int unsigned not null auto_increment primary key,
    nome varchar(80) not null,
    carga_horaria int not null,
    icone varchar(100) not null,
    sigla varchar(5),
    unique index(id)
);

create table tbl_aluno_curso(
	id int unsigned not null auto_increment primary key,
	id_aluno int unsigned not null,
    id_curso int unsigned not null,
    matricula varchar (15) not null,
    status_aluno varchar(10) not null,
    #Programacao para defenir uma estrangeira
    foreign key (id_aluno) #Define qual atributo sera ujma FK (foreign key)
		references tbl_aluno (id), #Define de onde vira a PK (primary key)
	foreign key (id_curso) #Define qual atributo sera ujma FK (foreign key)
		references tbl_curso (id), #Define de onde vira a PK (primary key)
	
        unique index (id)

);

#Permite vizualizar todos os dados de todas as colunas de uma tabela
select * from tbl_aluno;

#Permite inserir dados dentro de uma tabela
insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	values ('José da Silva',
			'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/12/1621553338681.webp',
            'M',
            '34.123.666-69',
            '527.566.908-69',
            'xaulinmatadordeporco@gmail.com',
            '011 1234-4321',
            '011 99169-9669',
            '1969-12-24');
            
insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	values ('Maria da Silva',
			'https://www.facebook.com/photo/?fbid=399714748998383&set=a.399714732331718&__tn__=%3C',
            'F',
            '34.321.123.69',
            '123.321.456-45',
            'flavinhodopneu@gmail.com',
            '011 4321-4567',
            '011 99189-9792',
            '1969-05-24');
            
            
#Permite alterar um valor de um atributo da tabela
	#Obs: sempre devemos especificar qual sera o registro que vai sofrer a altercao
		#Geralmente sempre sera a PK
update tbl_aluno set rg = '35.456.534-57' where id = 1;


#Permite apagar o registro de uma tabela do Banco de Dados
	#Obs: sempre devemos especificar qual sera o registro que vai sofrer a exclusao
		#Geralmente sempre sera a PK
delete from tbl_aluno where id = 2;


