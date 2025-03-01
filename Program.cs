

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

var app = builder.Build();

// Error handling
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseAntiforgery();

// **Fix: Ensure App.razor is recognized**
app.MapRazorComponents<CenterOfExcellence.App>()  // Change to match the correct namespace
    .AddInteractiveServerRenderMode();

app.Run();
