/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OBJETIVO:l) //
// AUTOR: Antony Gabriel                                                                                  //
// DATA: 31/10/2022                                                                                                //
// VERSAO: 1.0                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const insertAlunoCurso = async function(alunoCurso){
    try{

        const { PrismaClient } = require('@prisma/client') //IMPORT DA CLASSE PrismaClient, que é responsavel pelas interacoes com o BD

        const prisma = new PrismaClient() //INSTANCIA DA CLASSE PrismaClient

        let sql = `insert into tbl_aluno_curso (id_aluno, id_curso, matricula, status_aluno)
                values( '${alunouCurso.idAluno}', '${alunoCurso.idCurso}', '${alunoCurso.matricula}', ${alunoCurso.status_aluno})`

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

module.exports = {

    insertAlunoCurso
}