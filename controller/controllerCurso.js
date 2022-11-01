/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OBJETIVO: ) //
// AUTOR: Antony Gabriel                                                                                  //
// DATA: 27/10/2022                                                                                                //
// VERSAO: 1.0                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const {MESSAGE_ERROR, MESSAGE_SUCCESS} = require('../modulo/config.js')

const novoCurso = async function(curso){

    if(curso.nome == '' || curso.nome == undefined || curso.carga_horaria == '' || curso.carga_horaria == undefined || curso.icone == '' || curso.icone == undefined || curso.sigla == '' || curso.sigla == undefined){

        return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}

    //validacao para verificar email valido
    }else{

        //chamar a funcao insert criada na MODEL
        const novoCurso = require('../model/curso.js')
        const result = await novoCurso.insertCurso(curso)

        if(result){
            return {status: 201, message: MESSAGE_SUCCESS.INSERT_ITEM}
        }else{
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }

    }
}

const atualizarCurso = async function(curso){

    //Validacao do ID como campo obrigatorio
    if(curso.id == '' || curso.id == undefined){
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    }else{
        
    }

    if(curso.nome == '' || curso.nome == undefined || curso.carga_horaria == '' || curso.carga_horaria == undefined || curso.icone == '' || curso.icone == undefined || curso.sigla == '' || curso.sigla == undefined ){

        return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}

    //validacao para verificar email valido
    }else{

        //chamar a funcao update (atualizar) na MODEL
        const atualizarCurso = require('../model/curso.js')
        const result = await atualizarCurso.updateCurso(curso)
            
        if(result){
            return {status: 201, message: MESSAGE_SUCCESS.UPDATE_ITEM}
        }else{
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }

    }
}


const listarCurso = async function(){
    let dadosCursosJSON = {}

    const { selectAllCurso } = require('../model/curso.js')

    const dadosCurso= await selectAllCurso()

    if (dadosCurso){
            //Conversao do tipo de dados BigInt para int ???????
            // dadosAlunos.reverse().forEach(element => {
              //  element.id = Number(element.id)
            //})

            //Criamos uma chave alunos no jSON para retornar o array de alunos
            dadosCursosJSON.alunos = dadosCurso
        return dadosCursosJSON
    }else{
        return false
    }
}


const excluirCurso = async function(id){

     //Validacao do ID como campo obrigatorio
     if(id == '' || id == undefined){
        return {status: 400, message: MESSAGE_ERROR.REQUIRE_ID}
    }else{

        //Validacao para verificar se o ID existe no BD
        const curso = await buscarCurso(id)
        //Valida se foi encontrado um registro valido
        if(curso){

        //chamar a funcao update (atualizar) na MODEL
        const excluirCurso = require('../model/curso')
        const result = await excluirCurso.deleteCurso(id)
            
        if(result){
            return {status: 201, message: MESSAGE_SUCCESS.DELETE_ITEM}
        }else{
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
        }else{
            return {status: 404, message: MESSAGE_ERROR.NOT_FOUND_DB}
        }
    }
}

const buscarCurso = async function(id){
    let dadosCursosJSON = {}

    if(id == '' || id == undefined){
        return {status: 400, message: MESSAGE_ERROR.REQUIRE_ID}
    }else{

    const { selectByIdCurso } = require('../model/curso')

    const dadosCurso = await selectByIdCurso(id)

    if (dadosCurso){
            //Conversao do tipo de dados BigInt para int ???????
            // dadosAlunos.reverse().forEach(element => {
              //  element.id = Number(element.id)
            //})

            //Criamos uma chave alunos no jSON para retornar o array de alunos
            dadosCursosJSON.aluno = dadosCurso
        return dadosCursosJSON
    }else{
        return false
    }
    }
}


module.exports = {
    listarCurso,
    novoCurso,
    atualizarCurso,
    excluirCurso,
    buscarCurso
}