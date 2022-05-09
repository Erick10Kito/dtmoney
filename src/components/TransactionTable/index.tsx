import {Container} from "./style"

export function TransactionTable() {
    return (
        <Container>
<table>
    <thead>
        <tr>
            <th>Titulos</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
        </tr>
    </thead>


    <tbody>
        
        <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.00</td>
            <td>Desenvolvimento</td>
            <td>29/12/2003</td>
            
        </tr>
        <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ -1200.00</td>
            <td>Casa</td>
            <td>29/10/2003</td>
            
        </tr>
    </tbody>
</table>
        </Container>
    )
}