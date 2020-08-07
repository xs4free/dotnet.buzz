using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace dotnetBuzz.Functions
{
    public static class AddItem
    {
        [FunctionName("AddItem")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req, ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string title = req.Query["title"];

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            title = title ?? data?.title;

            string responseMessage = string.IsNullOrEmpty(title)
                ? ""
                : $"{{ \"id\": \"{Guid.NewGuid()}\", \"title\": \"{title}\" }}";

            return new OkObjectResult(responseMessage);
        }
    }
}
