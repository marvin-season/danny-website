---
slug: React开发记录
title: React开发记录
authors: [marvin-season]
tags: [React, 闭包陷阱]
---

## 组件的最新状态值

### 方案一

使用 useState callback

```tsx
let fetchData: (
  url: string,
  onData: (message: string) => void,
  onSettled: () => void
) => void;

const [messages, setMessages] = useState([]);

const simulateMessageUpdate = () => {
  fetchData(
    "/url",
    () => {
      const updatedMessages = ["New Message 1"];
      setMessages((pre) => [...pre, ...updatedMessages]);
    },
    () => {
      saveMessages();
    }
  );
};

const saveMessages = () => {
  setMessages((pre) => {
    localStorage.setItem(key, pre);
    return pre;
  });
};
```

:::tip
🔔 useReducer 肯定可以

🔔 需要注意状态 messages 的更新和读取

1、需要保证 messages 更新是基于是最新状态更新的

```jsx
// call back方式， pre为更新队列中上次更新的状态值，不是当前闭包函数中的状态值
setMessages((pre) => [...pre, ...updatedMessages]);
```

2、读取到的 messages 是最新的状态

```jsx
// 想要拿到更新后的最新状态，可以这样
setMessages((pre) => {
  localStorage.setItem(key, pre);
  return pre;
});
```

:::

### 方案二

使用 useEffect

```tsx
const [settled, setSettled] = useState<boolean>(false);

const onSettled = () => {
  setSettled(true);
};

useEffect(() => {
  if (settled) {
    localStorage.setItem(key, messages);
  }
}, [settled, messages]);
```
:::tip
setSettled触发组件重新调用，dom更新，messages也自然是最新的值，messages的更新队列在settled之前
:::