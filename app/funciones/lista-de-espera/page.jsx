import FuncionListaDeEspera from '@/components/site/FuncionListaDeEspera';

export const metadata = {
  title: 'Kensa · Lista de espera',
  description: 'Ofrece los horarios cancelados a tu lista de espera, en orden, y recupera tus citas.',
};

export default function Page() {
  return <FuncionListaDeEspera />;
}
