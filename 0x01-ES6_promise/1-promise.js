export default function getFullResponseFromAPI(success) {
  return new Promise((resol, rject) => {
    if (success) {
      resol({
        status: 200,
        body: 'Success',
      });
    } else {
      rject(new Error('The fake API is not working currently'));
    }
  });
}
