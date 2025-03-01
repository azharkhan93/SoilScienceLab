var builder = WebApplication.CreateBuilder(args);


builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

var app = builder.Build();


if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseWebSockets();
app.UseStaticFiles();  
app.UseAntiforgery();

app.MapRazorComponents<CenterOfExcellence.App>()  
    .AddInteractiveServerRenderMode();

app.Run();
