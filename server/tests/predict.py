import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' 
import sys
import tensorflow as tf
import pandas as pd
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing import sequence
import re
import nltk
stemmer = nltk.SnowballStemmer("english")
# nltk.download('stopwords')
from nltk.corpus import stopwords
import string
s = stopwords
stopword=set(s.words('english'))

model=tf.keras.models.load_model('../assets/hate_davidson_dataset_1dcnn_glove.h5')


if(model):
    print('loaded model')

def clean_text(text):
    text = str(text).lower()
    text = re.sub('\[.*?\]', '', text)
    text = re.sub('https?://\S+|www\.\S+', '', text)
    text = re.sub('<.*?>+', '', text)
    text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub('\n', '', text)
    text = re.sub('\w*\d\w*', '', text)
    text = [word for word in text.split(' ') if word not in stopword]
    text=" ".join(text)
    text = [stemmer.stem(word) for word in text.split(' ')]
    text=" ".join(text)
    return text

max_words = 50000
max_len = 300
tokenizer = Tokenizer(num_words=max_words)

def show_output(sentence):
    sentence = pd.Series(sentence)
    print(sentence)
    x = sentence.apply(clean_text)
    x = tokenizer.texts_to_sequences(x)
    x = sequence.pad_sequences(x,maxlen=max_len)
    return model.predict(x)


# print("Hello from python",str(sys.argv[1]))

print(show_output(str(sys.argv[1])))