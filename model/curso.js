/***************************
Objetivo: 
Autor: Antony Gabriel
Data criacao: 27/10/22
Versao:1.0
***************************/

//Funcao para inserir um novo registro no Banco de dados
const insertCurso = async function(curso){
    try{

        const { PrismaClient } = require('@prisma/client') //IMPORT DA CLASSE PrismaClient, que é responsavel pelas interacoes com o BD

        const prisma = new PrismaClient() //INSTANCIA DA CLASSE PrismaClient

        let sql = `insert into tbl_curso (nome, carga_horaria, icone, sigla)
                values('${curso.nome}', '${curso.carga_horaria}', '${curso.icone}', '${curso.sigla}')`

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

const updateCurso = async function(curso){
    try{

        const { PrismaClient } = require('@prisma/client') //IMPORT DA CLASSE PrismaClient, que é responsavel pelas interacoes com o BD

        const prisma = new PrismaClient() //INSTANCIA DA CLASSE PrismaClient

        let sql = `update tbl_curso set nome =                  '${curso.nome}',
                                        carga_horaria =         '${curso.carga_horaria}', 
                                        icone =                  '${curso.icone}', 
                                        sigla =                    '${curso.sigla}'
                                        where id =              '${curso.id}'`
        console.log(sql)

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

const selectAllCurso = async function(curso){
    const { PrismaClient } = require('@prisma/client') //IMPORT DA CLASSE PrismaClient, que é responsavel pelas interacoes com o BD

    const prisma = new PrismaClient() //INSTANCIA DA CLASSE PrismaClient
                                                        //order by para ordenar de acordo com crescente e drecrescente (nome, id, etc)
    const rsCursos = await prisma.$queryRaw `select cast(id as float) as id, nome, carga_horaria, icone, sigla from tbl_curso order by id desc` //Cria um objeto do tipo RecordSet (rsAlunos) para receber os dados do BD
                                                                    //as é para trocar a coluna do ID
    if(rsCursos.length > 0){
        return rsCursos
    }
    else{
        return false
    }
}

const deleteCurso = async function(id){
    try{

        const { PrismaClient } = require('@prisma/client') //IMPORT DA CLASSE PrismaClient, que é responsavel pelas interacoes com o BD

        const prisma = new PrismaClient() //INSTANCIA DA CLASSE PrismaClient

        let sql = `delete from tbl_curso where id = '${id}'`
        console.log(sql)

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

const selectByIdCurso = async function(id){
    const { PrismaClient } = require('@prisma/client') //IMPORT DA CLASSE PrismaClient, que é responsavel pelas interacoes com o BD

    const prisma = new PrismaClient() //INSTANCIA DA CLASSE PrismaClient
                                          
    let sql= `select cast(id as float) as id,
    nome,
    carga_horaria,
    icone,
    sigla
    from tbl_curso where id = ${id}` //Cria um objeto do tipo RecordSet (rsCursos) para receber os dados do BD


    //order by para ordenar de acordo com crescente e drecrescente (nome, id, etc)
    //as é para trocar a coluna do ID
    const rsCurso = await prisma.$queryRawUnsafe(sql)      

    if(rsCurso.length > 0){
        return rsCurso
    }
    else{
        return false
    }
}

//console.log(selectAllAlunos())

module.exports = {
    selectAllCurso,
    insertCurso,
    updateCurso,
    deleteCurso,
    selectByIdCurso
}