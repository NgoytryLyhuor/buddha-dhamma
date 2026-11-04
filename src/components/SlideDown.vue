<template>
  <Transition
    :css="false"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <slot />
  </Transition>
</template>

<script setup>
function onEnter(el, done) {
  // Capture natural computed styles before collapsing
  const style = window.getComputedStyle(el)
  const targetPt = style.paddingTop
  const targetPb = style.paddingBottom
  const targetMt = style.marginTop
  const targetMb = style.marginBottom
  const targetBtw = style.borderTopWidth
  const targetBbw = style.borderBottomWidth

  // Measure exact pixel height (Math.ceil prevents Khmer vowel/subscript clipping)
  const rectHeight = el.getBoundingClientRect().height
  const targetHeight = Math.ceil(rectHeight || el.offsetHeight || el.scrollHeight)

  // Initial collapsed state
  el.style.overflow = 'hidden'
  el.style.height = '0px'
  el.style.paddingTop = '0px'
  el.style.paddingBottom = '0px'
  el.style.marginTop = '0px'
  el.style.marginBottom = '0px'
  if (targetBtw && targetBtw !== '0px') el.style.borderTopWidth = '0px'
  if (targetBbw && targetBbw !== '0px') el.style.borderBottomWidth = '0px'
  el.style.opacity = '0'
  el.style.willChange = 'height, padding, margin, opacity'

  // Force synchronous reflow so browser commits initial 0px state
  void el.offsetHeight

  // Animate smoothly to target values using cubic-bezier for natural 60fps deceleration
  requestAnimationFrame(() => {
    el.style.transition = [
      'height 280ms cubic-bezier(0.16, 1, 0.3, 1)',
      'padding 280ms cubic-bezier(0.16, 1, 0.3, 1)',
      'margin 280ms cubic-bezier(0.16, 1, 0.3, 1)',
      'border-width 280ms cubic-bezier(0.16, 1, 0.3, 1)',
      'opacity 220ms ease-out'
    ].join(', ')

    el.style.height = targetHeight + 'px'
    el.style.paddingTop = targetPt
    el.style.paddingBottom = targetPb
    el.style.marginTop = targetMt
    el.style.marginBottom = targetMb
    if (targetBtw && targetBtw !== '0px') el.style.borderTopWidth = targetBtw
    if (targetBbw && targetBbw !== '0px') el.style.borderBottomWidth = targetBbw
    el.style.opacity = '1'
  })

  let finished = false
  const finish = () => {
    if (finished) return
    finished = true
    el.removeEventListener('transitionend', onEnd)
    clearTimeout(fallbackTimer)
    done()
  }

  const onEnd = (e) => {
    if (e.target === el && e.propertyName === 'height') {
      finish()
    }
  }

  el.addEventListener('transitionend', onEnd)
  const fallbackTimer = setTimeout(finish, 320)
}

function onAfterEnter(el) {
  // Clear all inline overrides to restore normal responsive flow
  el.style.height = ''
  el.style.paddingTop = ''
  el.style.paddingBottom = ''
  el.style.marginTop = ''
  el.style.marginBottom = ''
  el.style.borderTopWidth = ''
  el.style.borderBottomWidth = ''
  el.style.opacity = ''
  el.style.overflow = ''
  el.style.transition = ''
  el.style.willChange = ''
}

function onLeave(el, done) {
  // Capture current live height (handles interrupted expands gracefully)
  const rectHeight = el.getBoundingClientRect().height
  const currentHeight = Math.ceil(rectHeight || el.offsetHeight || el.scrollHeight)
  const style = window.getComputedStyle(el)
  const currentPt = style.paddingTop
  const currentPb = style.paddingBottom
  const currentMt = style.marginTop
  const currentMb = style.marginBottom
  const currentBtw = style.borderTopWidth
  const currentBbw = style.borderBottomWidth

  // Freeze current values inline
  el.style.height = currentHeight + 'px'
  el.style.paddingTop = currentPt
  el.style.paddingBottom = currentPb
  el.style.marginTop = currentMt
  el.style.marginBottom = currentMb
  if (currentBtw && currentBtw !== '0px') el.style.borderTopWidth = currentBtw
  if (currentBbw && currentBbw !== '0px') el.style.borderBottomWidth = currentBbw
  el.style.opacity = '1'
  el.style.overflow = 'hidden'
  el.style.willChange = 'height, padding, margin, opacity'

  // Force synchronous reflow
  void el.offsetHeight

  // Animate down to 0 immediately
  requestAnimationFrame(() => {
    el.style.transition = [
      'height 240ms cubic-bezier(0.25, 1, 0.5, 1)',
      'padding 240ms cubic-bezier(0.25, 1, 0.5, 1)',
      'margin 240ms cubic-bezier(0.25, 1, 0.5, 1)',
      'border-width 240ms cubic-bezier(0.25, 1, 0.5, 1)',
      'opacity 180ms ease-in'
    ].join(', ')

    el.style.height = '0px'
    el.style.paddingTop = '0px'
    el.style.paddingBottom = '0px'
    el.style.marginTop = '0px'
    el.style.marginBottom = '0px'
    if (currentBtw && currentBtw !== '0px') el.style.borderTopWidth = '0px'
    if (currentBbw && currentBbw !== '0px') el.style.borderBottomWidth = '0px'
    el.style.opacity = '0'
  })

  let finished = false
  const finish = () => {
    if (finished) return
    finished = true
    el.removeEventListener('transitionend', onEnd)
    clearTimeout(fallbackTimer)
    done()
  }

  const onEnd = (e) => {
    if (e.target === el && e.propertyName === 'height') {
      finish()
    }
  }

  el.addEventListener('transitionend', onEnd)
  const fallbackTimer = setTimeout(finish, 280)
}

function onAfterLeave(el) {
  el.style.height = ''
  el.style.paddingTop = ''
  el.style.paddingBottom = ''
  el.style.marginTop = ''
  el.style.marginBottom = ''
  el.style.borderTopWidth = ''
  el.style.borderBottomWidth = ''
  el.style.opacity = ''
  el.style.overflow = ''
  el.style.transition = ''
  el.style.willChange = ''
}
</script>
