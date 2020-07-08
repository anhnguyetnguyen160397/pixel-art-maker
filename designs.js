Vue.component('display',{
    template:
    `
    <div>
        <div id='choose-size'>
            <h2>Choose Grid Size</h2>
            <form id="sizePicker">
                <label for='inputHeight'><label for='name'>Grid Height:</label></label>
                <input type="number" id="inputHeight" name="height" min="1" value="1" v-model='height'>
                <label for='inputWidth'><label for='name'>Grid Width:</label></label>
                <input type="number" id="inputWidth" name="width" min="1" value="1" v-model='width'>
                <input type="submit" id='button' @click.prevent='makeGrid' @click='fillColor'>
            </form>
        </div>


        <div id='pick-color'>
            <h2>Pick A Color</h2>
            <input type="color" id="colorPicker" v-model='color'>
        </div>

       
        <div id='design-canvas'>
            <h2>Design Canvas</h2>
            <table id="pixelCanvas">
                <tbody>
                <tr v-for="index in parseInt(height)">
                    <td v-for="column in parseInt(width)"  @click.prevent='fillColor($event)'>
                    </td>
                    
                </tr>
                </tbody>

            </table>
        </div>
    </div>
    `,
    data(){
        
        return{
            height: 0,
            width: 0,
            color:'#f6b73c',
        }
    },
    methods:{
        fillColor(event) {
            targetId = event.currentTarget
            console.log(targetId)
            console.log(this.color)
            targetId.style.backgroundColor=this.color
        }
    }
})



var app=new Vue(
    {
        el: '#main',
        data:{
    
        },
        methods:{
            
        }
    }
);
