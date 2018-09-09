import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class QuizService {
  private QuestaoCollection: AngularFirestoreCollection<any> = this.db.collection('/Questao');
  private QuizCollection: AngularFirestoreCollection<any> = this.db.collection('/Quiz');

  constructor(private db: AngularFirestore) { }

  getQuestoesShot() {
    return this.QuestaoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        return { ...data };
      })),
    );
  }

  getAllQuestoes() {
    return this.QuestaoCollection.valueChanges();
  }

  getQuestaoAsync(cat$: Subject<any>) {
    const queryObservable = cat$.pipe(
      switchMap(cat =>
        this.db
          .collection('/Questao', ref => ref.where('id', '==', cat))
          .valueChanges(),
      ),
    );
    return queryObservable;
  }

  addQuestao(questao: any) {
    const id = this.db.createId();
    questao.id = id;
    this.QuestaoCollection.doc(id).set({
      ...questao,
    });
  }

}
