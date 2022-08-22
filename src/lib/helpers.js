// Dedublivate if a client ID is matched with another client
function dedublicateClients(clients) {
  return clients.filter((client1, index) => {
    return (
      index ===
      clients.findIndex((client2) => {
        return client1.clientId === client2.clientId;
      })
    );
  });
}

export { dedublicateClients };
