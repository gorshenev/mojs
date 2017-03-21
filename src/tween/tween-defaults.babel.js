export default {
  /* duration of the tween [0..∞] */
  duration:               350,
  /* delay of the tween [-∞..∞] */
  delay:                  0,
  /* repeat of the tween [0..∞], means how much to
     repeat the tween regardless first run,
     for instance repeat: 2 will make the tween run 3 times */
  repeat:                 0,
  /* speed of playback [0..∞], speed that is less then 1
     will slowdown playback, for instance .5 will make tween
     run 2x slower. Speed of 2 will speedup the tween to 2x. */
  speed:                  1,
  /*  flip onUpdate's progress on each even period.
      note that callbacks order won't flip at least
      for now (under consideration). */
  isYoyo:                   false,
  /* easing for the tween, could be any easing type [link to easing-types.md] */
  easing:                 'Sin.Out',
  /*
    Easing for backward direction of the tweenthe tween,
    if `null` - fallbacks to `easing` property.
    forward direction in `yoyo` period is treated as backward for the easing.
  */
  backwardEasing:         null,
  /* custom tween's name */
  name:                   null,
  /* custom tween's base name */
  nameBase:               'Tween',
  /*
    onProgress callback runs before any other callback.
    @param {Number}   The entire, not eased, progress
                      of the tween regarding repeat option.
    @param {Boolean}  The direction of the tween.
                      `true` for forward direction.
                      `false` for backward direction(tween runs in reverse).
  */
  onProgress:             null,
  /*
    onStart callback runs on very start of the tween just after onProgress
    one. Runs on very end of the tween if tween is reversed.
    @param {Boolean}  Direction of the tween.
                      `true` for forward direction.
                      `false` for backward direction(tween runs in reverse).
  */
  onStart:                null,
  onRefresh:              null,
  onComplete:             null,
  onRepeatStart:          null,
  onRepeatComplete:       null,
  onFirstUpdate:          null,
  onUpdate:               null,
  isChained:              false,
  // playback callbacks, these fire only when
  // `play`, `replay`, `playBackward`, `replayBackward` were called
  onPlaybackStart:        null,
  onPlaybackPause:        null,
  onPlaybackStop:         null,
  onPlaybackComplete:     null,
  // context which all callbacks will be called with
  callbacksContext:       null
};
