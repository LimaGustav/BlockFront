import axios from "axios";

const zabbixApi = axios.create({
    baseURL: 'http://34.230.169.32/zabbix/api_jsonrpc.php'
})

export default zabbixApi