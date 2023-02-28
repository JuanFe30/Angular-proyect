import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoPost = [];
    for(const modelo of value){
      if(modelo.name.toLowerCase().indexOf(arg)>-1){
        resultadoPost.push(modelo);
      };
    };
    return  resultadoPost
  }
  
}
