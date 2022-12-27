import { useSetRecoilState } from "recoil"
import { gerarId } from "../../gerarID"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) => {
    const hoje = new Date()
    if (evento.inicio < hoje) {
      throw new Error('Eventos não podem ser cadastrados com data anterior a atual.')
    }
    evento.id = gerarId()
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
  }
}

export default useAdicionarEvento