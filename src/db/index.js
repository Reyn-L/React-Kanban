/*jshint esversion: 6*/
const listOfFakeDB = [
    {
      "_id": 1,
      "title": "Make Better Styles",
      "priority": "medium",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 2,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "low",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 4,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "high",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 22,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "blocker",
      "status": "in-queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ,
    {
      "_id": 7,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "medium",
      "status": "in-progress",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ,
    {
      "_id": 25,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "Medium",
      "status": "done",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ];

export const getCardFromFakeDB = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(listOfFakeDB), 500);
});

export const addCardToFakeDB = (list) => new Promise((resolve, reject) => {
  setTimeout(() => {
    list._id = Math.random();
    listOfFakeDB.push(list);
    resolve(listOfFakeDB);
  }, 500);
});
