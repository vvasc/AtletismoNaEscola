import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class QuizService {
  private QuestaoCollection: AngularFirestoreCollection<any> = this.db.collection('/Questao');
  private QuizCollection: AngularFirestoreCollection<any> = this.db.collection('/Quiz');

  constructor(private db: AngularFirestore) { }

  addQuestao(questao: any) {
    const id = this.db.createId();
    questao.id = id;
    this.QuestaoCollection.doc(id).set({
      ...questao,
    });
  }

}
