import { ChevronDown, CloseIcon, EyeIcon } from './component/icons';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar'
export default function Home() {

  return (
    <div className='flex overflow-y-hidden'>
      <Sidebar />
      <div className='flex-1 space-y-10 bg-[#F0F0F0]'>
        <Navbar />
        <div className='bg-white rounded-t-3xl px-8 py-5 h-full space-y-5'>
          <div className="w-full space-y-5">
            <div className='w-full flex justify-between'>
              <h6 className='text-textblue text-lg font-medium'>Criar usuario</h6>
              <div className='bg-[#FF746B] rounded-full size-6 flex justify-center items-center'>
                <CloseIcon className='size-4 ' />
              </div>
            </div>
            <div className="w-full flex gap-3 items-center ">
              <div className="border w-full rounded-3xl p-3">
                <span className='text-black/70 text-xs'>NOME COMPLETO</span>
                <div>
                  <span className='text-textblue/90 text-sm font-medium'>Digite aqui</span>
                </div>
              </div>
              <div className="border w-full rounded-3xl p-3">
                <span className='text-black/70 text-xs'>USUARIO ATIVO?</span>
                <div>
                  <span className='text-textblue/90 text-sm font-medium'>Ativo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-5">
            <div className='w-full flex justify-between'>
              <h6 className='text-textblue text-lg font-medium'>Dados para acesso</h6>
            </div>
            <div className="w-full grid grid-cols-12 gap-3">
              <div className="col-span-4 border w-full rounded-3xl p-3">
                <span className='text-black/70 text-xs'>USUARIO</span>
                <div>
                  <span className='text-textblue/90 text-sm font-medium'>Digite aqui</span>
                </div>
              </div>
              <div className="col-span-4 border w-full rounded-3xl p-3 flex items-center justify-between">
                <div>
                  <span className='text-black/70 text-xs'>SENHA</span>
                  <div>
                    <span className='text-textblue/90 text-sm font-medium'>Digite aqui</span>
                  </div>
                </div>
                <EyeIcon />
              </div>
              <div className="col-span-4 border w-full rounded-3xl p-3 flex items-center justify-between">
                <div>
                  <span className='text-black/70 text-xs'>NOME COMPLETO</span>
                  <div>
                    <span className='text-textblue/90 text-sm font-medium'>Digite aqui</span>
                  </div>
                </div>
                <EyeIcon />
              </div>
              <div className="col-span-4 border w-full rounded-3xl p-3">
                <span className='text-black/70 text-xs'>E-MAIL</span>
                <div>
                  <span className='text-textblue/90 text-sm font-medium'>CONFIRMAR SENHA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-5">
            <div className='w-full flex justify-between'>
              <h6 className='text-textblue text-lg font-medium'>Privilegios</h6>
            </div>
            <div className="w-full grid grid-cols-12 gap-3">
              <div className="col-span-12 md:col-span-5 border w-full rounded-3xl p-3 flex items-center justify-between">
                <div>
                  <span className='text-black/70 text-xs'>ESCOLHA O GRUPO DO USUARIO</span>
                  <div >
                    <span className='text-textblue/90 text-sm font-medium'>Clique aqui para escolhero</span>
                  </div>
                </div>
                <ChevronDown className='size-5' />
              </div>
            </div>
          </div>
          <div>
            <button className='p-4 rounded-3xl text-sm text-white bg-[#00316B]'>Cadastrar usuario</button>
          </div>
        </div>
      </div>
    </div>
  );
}
