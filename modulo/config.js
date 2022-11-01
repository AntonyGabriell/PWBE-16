/***************************
Objetivo: arquivo responsvel pela configuracao de variaveis, constantes e mensagens do sistema)
Autor: Antony Gabriel
Data criacao: 13/10/22
Versao:1.0
***************************/

const MESSAGE_ERROR = {
    REQUIRED_FIELDS     :  'Existe(m) campo(s) obrigatorio(s) nao preenchido(s)',
    INVALID_EMAIL       :   'O e-mail informado nao é valido',
    CONTENT_TYPE        :   'O cabecalho da requisicao nao possui um content-type valido!',
    EMPTY_BODY          :   'O body da requisicao nao pode ser vazio',
    NOT_FOUND_DB        :   'Nao foram encontrados registros no Bando de Dados',
    INTERNAL_ERROR_DB   :   'Nao foi possivel realizar a operacao com o Banco de Dados',
    REQUIRE_ID          :   'O ID do registro é obrigatorio neste tipo de requisicao'
}

const MESSAGE_SUCCESS = {
    INSERT_ITEM         : 'Item criado com sucesso no Banco de Dados',
    UPDATE_ITEM         : 'Item atualizado com sucesso no Banco de Dados',
    DELETE_ITEM         : 'Item excluido com sucesso no Banco de Dados'
}

module.exports = {
    MESSAGE_ERROR,
    MESSAGE_SUCCESS
}