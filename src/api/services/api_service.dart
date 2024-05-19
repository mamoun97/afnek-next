import 'dart:convert';
import 'dart:developer';
import 'dart:io';

import 'package:get_storage/get_storage.dart';
import 'package:http/http.dart' as http;

class NetworkApiService {
  static GetStorage getStorage = GetStorage();
  static dynamic returnResponse(http.Response response) {
    switch (response.statusCode) {
      case 200:
        var responseJson = json.decode(response.body.toString());
        log(responseJson.toString());
        return responseJson;
      case 400:
        log(response.body.toString());
      case 401:
      case 403:
        log(response.body.toString());
      case 500:
      default:
        log('Error occured while Communication with Server with StatusCode : ${response.statusCode}');
    }
  }

  static Future<http.Response> getApi(String url, data) async {
    final String token = getStorage.read('token') ?? "";
    String queryString = '';
    String requestUrl = '';
    final http.Response response;
    if (data == null) {
      requestUrl = url;
    } else {
      queryString = Uri(queryParameters: data).query;
      requestUrl = '$url?$queryString';
    }
    final headers = {
      'Authorization': 'Bearer $token',
      "Accept": "application/json"
    };
    try {
      response =
          await http.get(Uri.parse(requestUrl), headers: headers).timeout(
                const Duration(
                  seconds: 20,
                ),
              );
      return response;
    } on SocketException {
      log('No Internet Connection');
      return http.Response("", 444);
    }
  }

  static Future<http.Response> putApi(String url, data) async {
    final String token = getStorage.read('token') ?? "";
    String queryString = '';
    String requestUrl = '';
    final http.Response response;
    if (data == null) {
      requestUrl = url;
    } else {
      queryString = Uri(queryParameters: data).query;
      requestUrl = '$url?$queryString';
    }
    final headers = {
      'Authorization': 'Bearer $token',
      "Accept": "application/json"
    };
    try {
      response =
          await http.put(Uri.parse(requestUrl), headers: headers).timeout(
                const Duration(
                  seconds: 20,
                ),
              );
      return response;
    } on SocketException {
      log('No Internet Connection');
      return http.Response("", 444);
    }
  }

  static Future<http.Response> postApi(String url, data) async {
    final String token = getStorage.read('token') ?? "";
    final headers = {
      HttpHeaders.contentTypeHeader: 'application/json',
      'Authorization': 'Bearer $token',
    };
    try {
      final response = await http
          .post(Uri.parse(url), body: json.encode(data), headers: headers)
          .timeout(const Duration(seconds: 30));
      return response;
    } on SocketException {
      log('No Internet Connection');
      return http.Response("", 444);
    } catch (e) {
      return http.Response("", 444);
    }
  }

  static Future<http.Response> deleteApi(String url) async {
    final String token = getStorage.read('token') ?? "";
    final headers = {
      HttpHeaders.contentTypeHeader: 'application/json',
      'Authorization': 'Bearer $token',
    };
    try {
      final response = await http
          .delete(Uri.parse(url), headers: headers)
          .timeout(const Duration(seconds: 30));
      return response;
    } on SocketException {
      log('No Internet Connection');
      return http.Response("", 444);
    } catch (e) {
      return http.Response("", 444);
    }
  }

  static Future<http.Response> patchApi(String url, data) async {
    final String token = getStorage.read('token') ?? "";

    final http.Response response;

    final headers = {
      HttpHeaders.contentTypeHeader: 'application/json',
      'Authorization': 'Bearer $token',
    };
    try {
      response = await http
          .patch(Uri.parse(url), body: json.encode(data), headers: headers)
          .timeout(const Duration(seconds: 30));
      return response;
    } on SocketException {
      log('No Internet Connection');
      return http.Response('', 444);
    } catch (e) {
      log('error$e');
      return http.Response('', 444);
    }
  }

  static Future postApiWithFile(String url, File file) async {
    final String token = getStorage.read('token') ?? "";

    dynamic responseJson;
    final headers = {
      HttpHeaders.contentTypeHeader: 'application/json',
      'Authorization': 'Bearer $token',
    };
    try {
      var request = http.MultipartRequest("POST", Uri.parse(url));
      request.headers.addAll(headers);
      request.files.add(http.MultipartFile.fromBytes(
          "file", File(file.path).readAsBytesSync(),
          filename: file.path));
      var res = await request.send();
      if (res.statusCode == 200) {
        final resp = await http.Response.fromStream(res);
        return responseJson = returnResponse(resp);
      }
    } on SocketException {
      log('No Internet Connection');
    } catch (e) {
      log('error$e');
    }

    return responseJson;
  }

  static Future<String> identitiesApi(String url, String token) async {
    final headers = {'authtoken': token, "Accept": "application/json"};
    try {
      final response = await http.get(Uri.parse(url), headers: headers).timeout(
            const Duration(
              seconds: 20,
            ),
          );
      if (response.statusCode == 200) {
        return json.decode(response.body)['token'];
      } else {
        return "";
      }
    } on SocketException {
      log('No Internet Connection');
      return "";
    }
  }
}
