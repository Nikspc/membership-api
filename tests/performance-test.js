import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 100 }, // Ramp-up to 100 users in 30s
        { duration: '1m', target: 100 },  // Stay at 100 users for 1 min
        { duration: '30s', target: 0 },   // Ramp-down
    ],
};

export default function () {
    let res = http.get('http://localhost:3000/api/members');
    check(res, { '✅ Status is 200': (r) => r.status === 200 });
    sleep(1);
}
