const NoResultsDiv = () => {
    return (
        <div className="no-results">
            <img src="icons/no-result.svg" alt="No results found" className="icon"/>
            <h3 className="title">Algo deu errado</h3>
            <p className="message">Não conseguimos recuperar os detalhes do clima. Certifique-se de ter inserido uma cidade válida ou tente novamente mais tarde</p>
        </div>
    )
}

export default NoResultsDiv