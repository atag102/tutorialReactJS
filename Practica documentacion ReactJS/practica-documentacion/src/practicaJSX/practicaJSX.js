import { React,Component} from "react";



class PracticaJsx extends Component{

    state={
        estado:false,
        fulbol:true
    }
    
    RetornarJsxVariasEtiquetas(state,props){
        this.setState((state,props)=>({
            estado:true
        }));
    }


    

    render(){
        const nombreUsuario="Antonio";
        
        //Variable JSX que guarda etiquetas de 1 sola linea
        const jsxUnaEtiqueta=<h1>Bienvenido {nombreUsuario}</h1>;

        //Variable JSX que guarda etiquetas con mas de 1 sola linea
        const jsxVariasEtiquetas=(
        
        <div>
            <h1>Bienvenido {nombreUsuario}</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Nombre
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        {nombreUsuario}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
        

        if(this.state.estado===false){
            
            return (
                <div className="PracticaJsx">
                {jsxUnaEtiqueta}
                <form>
                    <button type="sumbit" name="cambiar" onClick={()=>{this.RetornarJsxVariasEtiquetas(this.state,this.props)}}>
                        cambiar    
                    </button>
                </form>
                </div>
                );
        }
        else{
            console.log(this.state);
            return jsxVariasEtiquetas;
        }
    }
}

export default PracticaJsx;