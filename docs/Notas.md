## Links relevantes
### Bootstrap
* [Bootstrap 5.1](https://getbootstrap.com)
* [Forms feitos com Boostrap](https://getbootstrap.com/docs/5.1/forms/overview/)
* [Outros componentes do Bootstrap](getbootstrap.com/docs/5.1/components/)
* [Bootstrap Icons](https://icons.getbootstrap.com)
* [Exemplos de sites com Bootstrap](https://getbootstrap.com/docs/5.1/examples/)
* [Temas de sites usando Bootstrap](https://themes.getbootstrap.com)
### IoT
* [O que é IoT? (Oracle)](https://www.oracle.com/br/internet-of-things/what-is-iot/)
* [IoT Industrial (AWS Amazon)](https://aws.amazon.com/pt/iot/solutions/industrial-iot/)

## Comandos relevantes
> git clone git@github.com:mnishidaramos/aps-pwr.git nome-da-pasta

> git clone https://github.com/mnishidaramos/aps-pwr.git nome-da-pasta

Clona o repositório remoto do projeto para o seu computador. É possível definir um nome de pasta específica em nome-da-pasta. Caso contrário, será o mesmo nome do projeto.

> git status

Mostra qual o estado do projeto atual. Se há alterações para adicionar, commitar ou se há diferenças entre o repositório remoto e o local.

> git add -A

Adiciona todas as alterações exibidas pelo git status. É possível alterar o -A pelos arquivos ou pastas específicos que deseja adicionar.

> git commit -m " ... "

Commita as alterações adicionadas anteriormente. O texto entre aspas é a mensagem do commit, interessante para descrever o que foi feito nele.

> git remote add origin git@github.com:mnishidaramos/aps-pwr.git

> git remote add origin https://github.com/mnishidaramos/aps-pwr.git

Os dois comandos acima configuram o repositório remoto com o endereço dado. Neste caso, já para o repositório do trabalho da APS. O primeiro comando usa SSH e o segundo usa HTTPS. Caso tenha sido utilizado o git clone anteriormente, essa configuração não é necessária.

> git push origin main

Envia o código COMMITADO para o repositório remoto configurado em origin e na branch main.

> git pull

Baixa as alterações enviadas ao repositório remoto. É importante fazer isso toda vez antes de commitar ou enviar as alterações para o GitHub.