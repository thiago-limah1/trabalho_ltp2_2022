
class Product {
    constructor(descricao, quantidade, valor) {
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor = valor;  
        this.total = valor * quantidade;     
    }
}


class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');  
              
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Produto</strong>: ${product.descricao} -
                    <strong>Quantidade</strong>: ${product.quantidade} - 
                    <strong>Valor R$</strong>: ${product.valor} -
                    <strong>Total R$</strong>: ${product.total}
                    <a href="#" class="btn btn-danger" name="delete">Excluir</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Produto deletado com sucesso', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
      
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
   
        container.insertBefore(div, app);
      
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}


document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const descricao = document.getElementById('descricao').value,
            quantidade = document.getElementById('quantidade').value,
            valor = document.getElementById('valor').value;        
           

        
        const product = new Product(descricao, quantidade, valor);
    
        const ui = new UI();
        
        if (descricao === '' || quantidade === '' || valor === '') {
            ui.showMessage('Preencha todos os campos !');
        }

    
        ui.addProduct(product);
        ui.showMessage('Produto adicionado com sucesso', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
        .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });
