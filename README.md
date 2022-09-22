# Simple push notifications

## Como Iniciar

Inicializar o servidor: 
```
	node server
```

Acessar o arquivo receiver.html

Enviar as notificações atras como parametro na seguinte rota:
```
	http://localhost:8080/api/notify?notification=mensagem
```

A mensagem será exibida no receiver a cada push.