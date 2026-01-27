export const appRoutes = {
  dashboard: "/",
  orders: {
    index: "/solicitacoes",
    create: "/solicitacoes/nova",
    edit: (protocol = ":protocol") => `/solicitacoes/editar/${protocol}`,
  },
  pendencies: { index: "/pendencias" },
  budget: { index: "/orcamentos",
    create: "/orcamentos/novo",
    edit: (protocol=":protocol", id = ":id") => `/orcamentos/editar/${protocol}/${id}`,
   },

}

