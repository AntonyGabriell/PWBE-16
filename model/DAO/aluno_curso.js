/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OBJETIVO:l) //
// AUTOR: Antony Gabriel                                                                                  //
// DATA: 31/10/2022                                                                                                //
// VERSAO: 1.0                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Funcao para inserir um novo registro no BD
const insertAlunoCurso = async function(alunoCurso){
    try{

        const { PrismaClient } = require('@prisma/client') //IMPORT DA CLASSE PrismaClient, que é responsavel pelas interacoes com o BD

        const prisma = new PrismaClient() //INSTANCIA DA CLASSE PrismaClient

        let sql = `insert into tbl_aluno_curso (id_aluno, id_curso, matricula, status_aluno)
                values ('${alunoCurso.id_aluno}', '${alunoCurso.id_curso}', '${alunoCurso.matricula}', '${alunoCurso.status_aluno}')`

                
        //executa o script sql no banco de dados (.$executeRawUnsafe permite encaminhar uma variavel contendo o script)
        const result = await prisma.$executeRawUnsafe (sql)
        
        //verifica se o script foi executado com sucesso no BD
        if(result){
            return true
        }else{
            return false
        }

    } catch (error){
        return false
    }
}

//Funcao para buscar os dados de curso referente a um aluno
const selectAlunoCurso = async function(idAluno){
    const { PrismaClient } = require('@prisma/client') //IMPORT DA CLASSE PrismaClient, que é responsavel pelas interacoes com o BD

        const prisma = new PrismaClient() //INSTANCIA DA CLASSE PrismaClient


        let sql = `select cast(tbl_curso.id as float) as id_curso, tbl_curso.nome as nome_curso, tbl_curso.sigla as sigla_curso, tbl_curso.carga_horaria,
        tbl_aluno_curso.matricula, tbl_aluno_curso.status_aluno
        from tbl_aluno
            inner join tbl_aluno_curso
                on tbl_aluno.id = tbl_aluno_curso.id_aluno
            inner join tbl_curso
                on tbl_curso.id = tbl_aluno_curso.id_curso
        where tbl_aluno.id = ${idAluno};`

        
        const rsAlunoCurso = await prisma.$queryRawUnsafe(sql)      
            
        if(rsAlunoCurso.length > 0){
            return rsAlunoCurso
        }
        else{
            return false
        }
}


module.exports = {

    insertAlunoCurso,
    selectAlunoCurso
}