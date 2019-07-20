import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offer } from './../offer/offer';
import * as tf from '@tensorflow/tfjs';
 
@Injectable()
export class ModelService implements OnInit {

    linearModel: tf.Sequential;
    boostingModel: tf.Sequential;
    prediction: any;
  
    ngOnInit() {
      this.train();
    }
  
  
    async train(): Promise<any> {
        // Define a model for linear regression.
      this.linearModel = tf.sequential();
      this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));

      this.boostingModel.

      
    
      // Prepare the model for training: Specify the loss and the optimizer.
      this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
    
    
      // Training data, completely random stuff
      const xs = tf.tensor1d([3.2, 4.4, 5.5]);
      const ys = tf.tensor1d([1.6, 2.7, 3.5]);
    
    
      // Train
      await this.linearModel.fit(xs, ys)
    
      console.log('model trained!')
    }
  
    predict(val) {
      // todo
    }
}