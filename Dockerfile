
# ---------- Build stage ----------
FROM mcr.microsoft.com/dotnet/sdk:9.0-preview AS build
WORKDIR /src

# Copy csproj and restore as distinct layers for better caching
COPY CenterOfExcellence.csproj ./
RUN dotnet restore

# Copy the remaining source code
COPY . .

# Install Node.js (needed for Tailwind CSS build) and build CSS assets
# Remove this section if you commit wwwroot/css/build.css into the repo
RUN apt-get update \
    && apt-get install -y curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm ci \
    && npm run build:css

# Publish the application
RUN dotnet publish -c Release -o /app/publish

# ---------- Runtime stage ----------
FROM mcr.microsoft.com/dotnet/aspnet:9.0-preview
WORKDIR /app
COPY --from=build /app/publish .

# Render provides a PORT env-var at runtime; bind Kestrel to it
ENV ASPNETCORE_URLS=http://0.0.0.0:${PORT:-8080}
EXPOSE 8080

ENTRYPOINT ["dotnet", "CenterOfExcellence.dll"] 