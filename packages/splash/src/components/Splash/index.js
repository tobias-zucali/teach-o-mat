import React, { useState } from 'react';
import classNames from 'classnames';
import './index.css';


// https://en.wiktionary.org/wiki/-logy#English
const pre = [
  'teach',
  'team',
  'train',
  // 'test',
  // 'collab',
  // 'connect',
  // 'talk',
]
const post = [
  'mat',
  'matics',
  'mation',
  'mativ',
  'meter',
  // 'nomy',
  // 'logy',
  // 'logic',
  // 'logically',
  // 'nomic',
  // 'nomics',
  // 'nym',
  // 'nomist',
  // 'logist',
]

function SplashOptions({
  options,
  name,
  value,
  onChange,
  ...otherProps
}) {
  return (
    <div
      className={classNames('Splash-options', 'Splash-options_'+name)}
      {...otherProps}
    >
    {options.map((option) => (
      <input
        aria-label={option}
        className={classNames('Splash-options-radio')}
        key={option}
        name={name}
        type="radio"
        value={option}
        checked={value === option}
        onChange={() => onChange(option)}
      />
    ))}
  </div>
  )
}

const getNext = (options, currentOption) => {
  const currentIndex = options.indexOf(currentOption)
  console.log('options[(currentIndex + 1) % options.length]', options[(currentIndex + 1) % options.length])
  return options[(currentIndex + 1) % options.length]
}

function Splash() {
  const [preValue, setPreValue] = useState(pre[0])
  const [postValue, setPostValue] = useState(post[0])

  return (
    <div
      className={classNames('Splash', {
        'Splash_highlight-red': preValue === 'teach' && postValue === 'mat',
        'Splash_highlight-green': preValue === 'team' && postValue === 'mation',
        'Splash_highlight-yellow': preValue === 'train' && postValue === 'meter',
      })}
    >
      <SplashOptions
        options={pre}
        name="pre"
        value={preValue}
        onChange={setPreValue}
        onClick={() => setPreValue(getNext(pre, preValue))}
      />
      <div
        className={classNames('Splash-options', 'Splash-options_center')}
      >{' - o - '}</div>
      <SplashOptions
        options={post}
        name="post"
        value={postValue}
        onChange={setPostValue}
        onClick={() => setPostValue(getNext(post, postValue))}
      />
    </div>
  );
}

export default Splash;
