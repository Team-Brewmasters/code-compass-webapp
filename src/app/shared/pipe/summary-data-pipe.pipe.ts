import { VariableBinding } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryDataPipe',
  standalone: true
})
export class SummaryDataPipePipe implements PipeTransform {

  transform(items: any, ): any {
    let cards = [];
    for(let item of items) {
      console.log(item);
      let card = {
        key: item.key,
        value: item.value,
        col: 2,
        row: 1
      }
      if (item.key === 'repository') {
        card.key = 'repository'
        card.value = {
          name: item.value.name,
          description: item.value.description
        }
        card.col = 2;
        card.row = 2;
        cards.push(card);
        if (item.value.technology_stack) {
          const techStackCard = {...card}; 
          techStackCard.key = 'technology_stack';
          techStackCard.value = {
            technology_stack: {
              languages: item.value.technology_stack.languages,
              frameworks: item.value.technology_stack.frameworks,
              databases: item.value.technology_stack.databases,
              tools: item.value.technology_stack.tools
            }
          };
          techStackCard.col = 2;
          techStackCard.row = 2;
          cards.push(techStackCard);
        }
      } else if (item.key === 'overview') {
        card.key = 'overview';
        card.value = item.value;
        card.col = 3;
        card.row = 3;
        cards.push(card);
        if (item.value.security) {
          const securityCard = {...card}; 
          securityCard.key = 'security';
          securityCard.value = item.value.security;
          securityCard.col = 3;
          securityCard.row = 4;
          cards.push(securityCard);
        }
        if (item.value.performance) {
          const performanceCard = {...card}; 
          performanceCard.key = 'performance';
          performanceCard.value = item.value.performance;
          performanceCard.col = 2;
          performanceCard.row = 2;
          cards.push(performanceCard);
        }
      }
      else if (item.key === 'code_analysis') {
        card.key = 'code_analysis';
        card.value = item.value;
        card.col = 3;
        card.row = 3;
        cards.push(card);
        if (item.value.files) {
          const filesCard = {...card}; 
          filesCard.key = 'files';
          filesCard.value = item.value.files;
          filesCard.col = 2;
          filesCard.row = 5;
          cards.push(filesCard);
        }
      }
    }
    cards.sort((a, b) => {
      const order = ['repository', 'technology_stack', 'code_analysis', 'performance', 'security', 'files'];
      return order.indexOf(a.key) - order.indexOf(b.key);
    });
    return cards;
  }
}
