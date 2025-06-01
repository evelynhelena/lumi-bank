export const translateTransactionType = (transactionType:string) => {
    switch (transactionType) {
        case 'pix':
            return "Pix"
        case "exchange":
            return "Câmbio de Moeda"
        case "doc-ted":
            return "DOC/TED"
        case "loan":
            return "Empréstimo e Financiamento"
        default:
            return "Tipo da conta não encontrado"
    }

}